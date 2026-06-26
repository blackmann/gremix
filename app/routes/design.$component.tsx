import type { MetaFunction } from "react-router"
import { directory } from "~/lib/design-system"

export const meta: MetaFunction = ({ params }) => {
  const component = directory.find((it) => it.id === params.component)!
  return [{ title: component.title}]
}

export default function DesignComponent() {
  return <div></div>
}
