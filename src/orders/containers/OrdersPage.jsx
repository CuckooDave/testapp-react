import { PageTitle } from "../../common/components/PageTitle";


export function OrdersPage (props) {
    return (
        <div>
            <PageTitle title="Orders Page"></PageTitle>
            <button onClick={props.onClick}>Sign out</button>
        </div>
    )
}