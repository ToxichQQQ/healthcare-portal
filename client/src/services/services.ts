import axios from "axios";

const link = "http://localhost:9999";

class PatientsPortalApi {
  getInstance = () => {
    const instance = axios.create({
      baseURL: link,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return instance;
  };

  fetchPatients = async () => {
    const response = await this.getInstance().get("/patients");
    return response.data;
  };

  fetchGeneralInfo = async () => {
    const response = await this.getInstance().get("/info");
    return response.data;
  };

  fetchPatientInfo = async (id) => {
    const response = await this.getInstance().get(`/patient/${id}`);
    return response.data.patient;
  };
}

export default new PatientsPortalApi();
