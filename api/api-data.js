export class ApiData {

  static async fetchAll () {
    const response = await fetch('http://localhost:3000/src/data/data.json');
    const data = await response.json();
    return data;
  }

  static async fetchByID (id) {
    const data = await this.fetchAll();
    const [house] = data.filter((house) => house.id === id);
    return house;
  }
}