import { Button } from "@patternfly/react-core";


function Pinned(props: { interests: string[] }) {
    return (
        <div className="container">
            {props.interests.map((interest) => {
                return (
                    <Button
                        className="px-3 py-2 mb-2 pinned"
                        variant="primary"
                    >
                        {interest}
                    </Button>
                );
            })}
        </div>
    );
}
export default Pinned;