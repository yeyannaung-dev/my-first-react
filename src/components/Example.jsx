export default function Example({ title, description, code }) {
    return (
        <div id="tab-content">
            <h3>{title}</h3>
            <p>{description}</p>
            <pre>
                <code>
                    {code}
                </code>
            </pre>
        </div>
    );
}