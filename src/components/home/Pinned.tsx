import { Button } from "@patternfly/react-core";


function Pinned(props: { interests: string[] }) {
    return (
        <div className="container">
            {props.interests.map((interest) => {
                return (
                    <Button
                        className="px-5 py-1 mb-2"
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