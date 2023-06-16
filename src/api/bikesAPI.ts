export interface BikesModel {
  model: string
  price: number
  img: string[]
  specs: string
  category: string
  clicks: number
  youtube: string
  facebook: string
  _id: string
}

export const GetallBike = async () => {
  const response = await fetch('http://localhost:9090/bikes/get')
  if (!response.ok) {
    throw new Error('Request failed')
  }
  const data = await response.json()
  return data.pinewoodBikes
}

export const GetspecBike = async (bikeId: string) => {
  const response = await fetch(`http://localhost:9090/bikes/get/${bikeId}`)
  if (!response.ok) throw new Error('Request failed')
  return (await response.json()).pinewoodBike
}

export const GetcategoryBike = async (category: string) => {
  const response = await fetch(`http://localhost:9090/bikes/filterByCategory?category=${category}`)
  if (!response.ok) {
    throw new Error('Request failed')
  }
  const data = await response.json()
  return data.pinewoodBikes
}

export const GetcategoryPriceBike = async (
  category: string,
  minPrice: number,
  maxPrice: number
) => {
  const response = await fetch(
    `http://localhost:9090/bikes/filterByPriceCategory?category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}`
  )
  if (!response.ok) {
    throw new Error('Request failed')
  }
  const data = await response.json()
  return data.pinewoodBikes
}

export const GetPriceBike = async (minPrice: number, maxPrice: number) => {
  const response = await fetch(
    `http://localhost:9090/bikes/filterPrice?minPrice=${minPrice}&maxPrice=${maxPrice}`
  )
  if (!response.ok) {
    throw new Error('Request failed')
  }
  const data = await response.json()
  return data.pinewoodBikes
}
