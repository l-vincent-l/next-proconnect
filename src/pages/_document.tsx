import { Html, Head, Main, NextScript, DocumentProps } from "next/document";
import { dsfrDocumentApi } from "./_app";
import { Header } from "@codegouvfr/react-dsfr/Header";
import { Badge } from "@codegouvfr/react-dsfr/Badge";
const { getColorSchemeHtmlAttributes, augmentDocumentForDsfr } =
  dsfrDocumentApi;

export default function Document(props: DocumentProps) {
  return (
    <Html {...getColorSchemeHtmlAttributes(props)}>
      <Head />
      <body>
        <Header
          brandTop={
            <>
              MON COMPTE PRO
              <br />
              EXEMPLE
            </>
          }
          homeLinkProps={{
            href: "/",
            title:
              "Accueil - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)",
          }}
          id="fr-header-simple-header-with-service-title-and-tagline"
          serviceTitle={
            <>
              Proconnect / exemple{" "}
              <Badge as="span" noIcon severity="success">
                Beta
              </Badge>
            </>
          }
        />
        <div className="fr-container">
          <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}

augmentDocumentForDsfr(Document);
