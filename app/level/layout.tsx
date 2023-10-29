export default function RootLayout(props: { children: React.ReactNode, auth: React.ReactNode }) {
  return (
    <div>
      {props.children}
      {props.auth}
    </div>
  );
}