const contentful = require('contentful');

const accessToken = 'WgBVEIqH9bN1lTxiViqIpjLmYYR4TfN63brQenapoxM'
const spaceId = '5lys9idvc0gb'

export default class Contentful {
  private client: any;
  
  constructor () {
    this.client = contentful.createClient({
      space: spaceId,
      accessToken,
    });
  }

  async retrieveWWProducts () {
    const response = await this.client.getEntries({ content_type: 'woodworkingEcommerceApp' });
    return response.items;
  }

  async retrieveCraftsPerson(craftsPersonId: string) {
    const response = await this.client.getEntries({
      content_type: 'craftspersonBio',
      'fields.id': craftsPersonId
    });
    return response.items;
  }
}