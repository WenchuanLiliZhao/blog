/* eslint-disable @typescript-eslint/no-explicit-any */
import Nav from "../../Components/Nav"

export default function RootPageLayout(props: any) {
  return (<>
    <Nav type="big" />

    {props.children}
  </>)
}