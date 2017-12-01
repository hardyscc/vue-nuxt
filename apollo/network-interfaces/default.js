import { createNetworkInterface } from 'apollo-client'

export default ctx => {
  const networkInterface = createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cj1dqiyvqqnmj0113yuqamkuu'
  })
  networkInterface.use([
    {
      applyMiddleware(req, next) {
        if (!req.options.headers) {
          req.options.headers = {}
        }
        const token = 'dummy'
        req.options.headers.Authorization = `Bearer ${token}`
        next()
      }
    }
  ])
  return networkInterface
}
