use ollama_rs::{generation::completion::request::GenerationRequest, Ollama};

#[tauri::command]
async fn generate_response(message: String) -> Result<String, String> {
    let ollama = Ollama::new("http://localhost", 11434);
    let model = "llama3:8b";
    let prompt = message.to_string();

    match ollama.generate(GenerationRequest::new(model.to_string(), prompt)).await {
        Ok(response) => Ok(response.response.clone()),
        Err(e) => Err(format!("Failed to generate response: {}", e)),
    }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![generate_response])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

