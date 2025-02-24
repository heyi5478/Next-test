export type User = {
  id: number;
  name: string;
};

// 取得所有使用者資料
export const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json(); 
};

export const fetchUserById = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!res.ok) throw new Error(`Failed to fetch user with id ${id}`);
  
  return res.json();
};