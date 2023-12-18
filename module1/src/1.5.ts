// Reference Type --> Object

const user: {
  //   company: 'Programming Hero'; //type --> literal types
  readonly company: string; //type --> literal types
  firstName: string;
  middleName?: string; // optional type
  lastName: string;
  isMarried: boolean;
} = {
  company: "Programming Hero",
  firstName: "Golam",
  lastName: "Rasul",
  isMarried: false,
};


user.company = "RedDev"; // error