type Client = {
  id: number;
  displayName: string;
  email: string;
  document: string;
  phone: string;
  roleId: Roles;
};

enum Roles {
  disabled = 1,
  active = 2,
  inactive = 3,
  waiting = 4,
}

type UserApiResponse = {
  data: Client[];
};
