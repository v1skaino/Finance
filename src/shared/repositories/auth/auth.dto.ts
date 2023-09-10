type SignUpDTO = {
  name: string;
  email: string;
  password: string;
};

type SignInDTO = {
  email: string;
  password: string;
};

export type { SignInDTO, SignUpDTO };
