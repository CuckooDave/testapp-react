import { Button } from "../../common/components/Button";
import { PageTitle } from "../../common/components/PageTitle";


export function OrdersPage (props) {
    return (
        <div>
            <PageTitle title="Orders Page"></PageTitle>
            <Button onClick={props.onClick}>Sign out</Button>
        </div>
    )
}