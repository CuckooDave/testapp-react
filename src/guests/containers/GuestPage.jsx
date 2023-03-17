import { PageTitle } from "../../common/components/PageTitle";

export function GuestPage (props) {
    return (
        <div>
            <PageTitle title="Guest Page"></PageTitle>
            <button onClick={props.onSignIn}>Sign in</button>
        </div>
    )
}