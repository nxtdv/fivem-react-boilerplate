export const Nui = {
  async send(event, data = {}) {
    return fetch(`https://fivem-react-boilerplate/${event}`, {
      method: "post",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    });
  },

  emulate(type, data = null) {
    window.dispatchEvent(
      new MessageEvent("message", {
        data: { type, data },
      })
    );
  },
};
