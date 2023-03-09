import { invoke } from "@tauri-apps/api"

export async function saveDataToLocalStorage(key: string, value: boolean) {
  await invoke("local_storage", {
    cmd: "set",
    key: key,
    value: value.toString(),
  })
}
