import { useEffect } from "react"
import useSWR from "swr"

const adminAddresses = {
    "0x3f5a1e4d7b132ab0e4799832791d9bbcd869e731a0d6096653c92e94a06afbd6": true
  }

export const handler = (web3, provider) => () => {
 const { data, mutate, ...rest } = useSWR(() =>
    web3 ? "web3/accounts" : null,
    async () => {
      const accounts = await web3.eth.getAccounts()
      return accounts[0]
    }
  )
  useEffect(() => {
    provider &&
    provider.on("accountsChanged",
      accounts => mutate(accounts[0] ?? null)
    )
  }, [provider])

  return {
    data,
    isAdmin: (
      data &&
      adminAddresses[web3.utils.keccak256(data)]) ?? false,
    mutate,
    ...rest
  }
}