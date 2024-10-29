import { useSession, signIn, signOut } from "next-auth/react";
import { ProConnectButton } from "@codegouvfr/react-dsfr/ProConnectButton";
import { Button } from "@codegouvfr/react-dsfr/Button";

export default function LoginButton() {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <>
        Connecté avec le mail {session.user.email} <br />
        <Button onClick={() => signOut()}>Déconnexion</Button>
      </>
    );
  }
  return (
    <>
      Se connecter <br />
      <ProConnectButton onClick={() => signIn("pro-connect")} />
    </>
  );
}
