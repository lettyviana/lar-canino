import { ApiServices } from "./ApiServices";

export class DogServices extends ApiServices {
  baseUrl = "/dogs";

  async getDogs() {
    try {
      const response = await this.get(this.baseUrl);
      if (Array.isArray(response?.data?.dogs)) {
        return response.data.dogs;
      } else {
        throw new Error("Resposta inválida da API");
      }
    } catch (error) {
      throw new Error("Erro ao buscar os cachorros: " + error);
    }
  }
}
