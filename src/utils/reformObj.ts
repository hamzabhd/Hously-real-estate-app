export const reformObj = (myObj: {
  [k: string]: FormDataEntryValue | string
}) => {
  let newObj: Record<string, string | FormDataEntryValue> = {}
  let facts: (string | FormDataEntryValue)[] = []
  let destinations: (string | FormDataEntryValue)[] = []
  let links: (string | FormDataEntryValue)[] = []

  for (const key in myObj) {
    if (/fact/g.test(key) && myObj[key] !== '') {
      facts.push(myObj[key])
    } else if (/destination/g.test(key) && myObj[key] !== '') {
      destinations.push(myObj[key])
    } else if (/link/g.test(key) && myObj[key] !== '') {
      links.push(myObj[key])
    } else if (myObj[key] !== '') {
      newObj = {
        ...newObj,
        [key]: myObj[key],
      }
    }
  }

  return {
    ...newObj,
    facts,
    links,
    destinations,
  }
}
