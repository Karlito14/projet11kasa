
export class ApiData {
  static async fetchAll() {
    const response = await fetch(import.meta.env.VITE_LIEN_DATA);
    const data = await response.json();
    return data;
  }

  static async fetchByID(id) {
    const data = await this.fetchAll();
    const [house] = data.filter((house) => house.id === id);
    return house;
  }
}
