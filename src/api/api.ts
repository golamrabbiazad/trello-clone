import type { AppState } from './../AppStateContext';



export const save = async (payload: AppState) => {
    try {
        const response = await fetch("http://localhost:4000/save", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });
        return await response.json();
    } catch (message) {
        return console.log(message);
    }
  }
  
  export const load = async () => {
    const response = await fetch("http://localhost:4000/load");
      return await (response.json() as Promise<AppState>);
  }
  