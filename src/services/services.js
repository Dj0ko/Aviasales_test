class AviasalesDBService {
  async getSearchId() {
    const res = await fetch('https://front-test.beta.aviasales.ru/search');

    if(!res.ok) {
      throw new Error();
    }

    const body = await res.json();
    return body;
  }


  async getTickets(searchId) {
    const res = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);

    if(!res.ok && res.status !== 500) {
      throw new Error();
    }

    const body = await res.json();

    return {body, searchId};
  }
}

const aviasalesDBService = new AviasalesDBService();

export default aviasalesDBService;