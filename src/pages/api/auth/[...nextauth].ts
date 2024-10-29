import NextAuth, { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    {
      id: "pro-connect",
      name: "Pro Connect",
      type: "oauth",
      wellKnown: `${process.env.MON_COMPTE_PRO_PROVIDER_URL}/.well-known/openid-configuration`,
      clientId: process.env.MON_COMPTE_PRO_OIDC_CLIENT_ID,
      clientSecret: process.env.MON_COMPTE_PRO_OIDC_CLIENT_SECRET,
      authorization: {
        params: {
          scope:
            "openid given_name usual_name email phone uid siren siret idp_id idp_acr idp_name",
        },
      },
      checks: ["state", "nonce"],
      issuer: process.env.MON_COMPTE_PRO_PROVIDER_ID,
      userinfo: {
        async request(context: any) {
          const userInfo = await fetch(
            process.env.MON_COMPTE_PRO_PROVIDER_URL + "/userinfo",
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${context.tokens.access_token}`,
              },
            }
          ).then((res) => {
            return res.text();
          });
          return JSON.parse(
            Buffer.from(userInfo.split(".")[1], "base64").toString()
          );
        },
      },
      profile: async (profile: any) => {
        return {
          id: profile.email,
          prenom: profile.given_name,
          nom: profile.usual_name,
          email: profile.email,
          agentconnect_info: profile,
        };
      },
    },
  ],
};

export default NextAuth(authOptions);
