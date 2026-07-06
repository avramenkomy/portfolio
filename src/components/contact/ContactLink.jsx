export default function ContactLink(props) {
  const { label, href, value } = props;

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className=""
    >
      <p className="">
        {label}
      </p>

      <p className="">
        {value}
      </p>
    </a>
  )
}