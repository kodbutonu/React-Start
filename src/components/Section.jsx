export default function Section({ title, children,...props}) {
    <section {...props}>
        <h2>{title}</h2>
        {children}
    </section>
}