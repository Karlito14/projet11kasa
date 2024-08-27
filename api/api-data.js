export class ApiData {

  static async fetchAll () {
    const response = await fetch('./src/data/data.json');
    const data = await response.json();
    return data;
  }

  static async fetchByID (id) {
    const response = await fetch('../src/data/data.json');
    const data = await response.json();
    const [house] = data.filter((house) => house.id === id);
    return house;
  }
}