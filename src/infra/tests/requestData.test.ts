import AdapterTest from "../adapter/adapter-test"
import HttpClient from "../http/http-client"

describe('REQUESTS', () => {
  it('should return data from request', async () => {
    const fakeAdapter = new AdapterTest()

    const client = new HttpClient(fakeAdapter)
    const response = await client.get('1')
    expect(response).toEqual({ data: { id: '1' } })

  })
})