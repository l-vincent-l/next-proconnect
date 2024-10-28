import NextAuth from "next-auth"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [    {
    id: "pro-connect",
    name: "Pro Connect",
    type: "oauth",
    wellKnown: `${process.env.MON_COMPTE_PRO_PROVIDER_URL}/.well-known/openid-configuration`,
    clientId: process.env.MON_COMPTE_PRO_OIDC_CLIENT_ID,
    clientSecret: process.env.MON_COMPTE_PRO_OIDC_CLIENT_SECRET,
    authorization: {
      params: {
        scope:
          "openid given_name usual_name email phone uid siren siret idp_id idp_acr",
      },
    },
    // idToken: true,
    // userinfo: {
    //   // Was not able to override this declaration.
    //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //   async request(context: any) {
    //     if (!context.tokens.access_token) {
    //       return {};
    //     }

    //     console.log(
    //       "context.tokens.access_token",
    //       context.tokens.access_token,
    //     );

    //     const userinfo = await context.client.userinfo(
    //       context.tokens.access_token,
    //     );

    //     return userinfo;
    //   },
    // },
    userinfo: {
      url: `${process.env.MON_COMPTE_PRO_PROVIDER_URL}/userinfo`,
    },
    checks: ["state", "nonce"],
    issuer: process.env.MON_COMPTE_PRO_PROVIDER_ID,
    profile({ sub, ...rest }) {
      console.log("sub", sub);
      console.log("rest", rest);
      return { id: sub, ...rest };
    },
  },

   
],
}

export default NextAuth(authOptions)