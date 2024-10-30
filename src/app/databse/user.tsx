class User {
    id: string = ""; 
    role: string = "user";
    
    
    constructor(
        id: string,
        role: string
    ) {
      this.id = id
      this.role = role
    }
  
  }

export default User