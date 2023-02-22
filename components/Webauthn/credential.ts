export async function credential() {
  const o: CredentialCreationOptions = {
    publicKey: {
      authenticatorSelection: {
        authenticatorAttachment: "cross-platform",
        requireResidentKey: true,
        userVerification: "required",
      },
      challenge: new Uint8Array(
        26
      ) /* this actually is given from the server */,
      rp: {
        name: "Example CORP",
        id: "login.example.com",
      },
      user: {
        id: new Uint8Array(26) /* To be changed for each user */,
        name: "jdoe@example.com",
        displayName: "John Doe",
      },
      pubKeyCredParams: [
        {
          type: "public-key",
          alg: -7,
        },
      ],
    },
  };

  await create(o);
}

async function create(options: CredentialCreationOptions) {
  const c = await navigator.credentials.create(options);

  console.log(c);
}
