export class FakeAuth {
  private isAuthenticated: boolean;

  constructor() {
    this.isAuthenticated = false;
  }

  fakeRequest(ms: number) {
    new Promise(resolve => setTimeout(resolve, ms));
  }

  async signIn() {
    await this.fakeRequest(300);
    this.isAuthenticated = true;
    return this.isAuthenticated;
  }

  async signOut() {
    await this.fakeRequest(300);
    this.isAuthenticated = false;
    return this.isAuthenticated;
  }
}
