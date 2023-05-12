import { pollQuery } from '../../components/poll/query'
import getClient from '../../apollo/server-client'
import { Poll } from './poll'

export default async function Sell() {
  const data = await getClient().query({
    query: pollQuery,
    variables: { id: '1' },
  })
  console.log('INSIDE SELL->PAGE-> GET CLIENT', data)

  return <Poll poll={data.data.poll} />
}
