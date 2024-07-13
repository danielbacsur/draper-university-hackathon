"use client";

import { useState, useEffect, FormEvent, FormEventHandler } from "react";
import { useCompletion } from "ai/react";

interface Model {
  id: string;
  pipeline_tag: string;
  downloads: number;
}

export default function HuggingFaceModels() {
  const [models, setModels] = useState<Model[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);

  const { completion, input, handleInputChange, handleSubmit, isLoading } =
    useCompletion({
      api: "/api/completion",
      body: {
        hello: selectedModel?.id,
      },
    });

  useEffect(() => {
    async function fetchModels() {
      try {
        const response = await fetch(
          "https://huggingface.co/api/models?sort=downloads&direction=-1&filter=text-generation&limit=100"
        );
        const data = await response.json();
        setModels(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching models:", error);
        setLoading(false);
      }
    }

    fetchModels();
  }, []);

  const handleModelSelect = (model: Model) => {
    setSelectedModel(model);
  };

  const handleChat = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedModel) return;

    await handleSubmit(e);
  };

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Chat with Hugging Face Text Models
      </h1>

      <div>{JSON.stringify(selectedModel)}</div>

      {loading ? (
        <p>Loading models...</p>
      ) : (
        <div className="flex">
          <ul className="w-1/3 space-y-4 pr-4 overflow-y-auto max-h-screen">
            {models.map((model) => (
              <li
                key={model.id}
                className={` p-4 rounded-lg cursor-pointer ${
                  selectedModel?.id === model.id
                    ? "border-2 border-blue-500"
                    : ""
                }`}
                onClick={() => handleModelSelect(model)}
              >
                <h2 className="text-xl font-semibold">{model.id}</h2>
                <p className="text-gray-600">{model.pipeline_tag}</p>
                <p className="text-sm text-gray-500 mt-2">
                  Downloads: {model.downloads.toLocaleString()}
                </p>
              </li>
            ))}
          </ul>

          <div className="w-2/3 pl-4">
            {selectedModel ? (
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Chat with {selectedModel.id}
                </h2>
                <form onSubmit={handleChat} className="space-y-4">
                  <input
                    className="w-full p-2 border rounded"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Enter your message..."
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    disabled={isLoading}
                  >
                    {isLoading ? "Generating..." : "Send"}
                  </button>
                </form>
                {completion && (
                  <div className="mt-4 p-4 rounded">
                    <h3 className="font-bold">Model Response:</h3>
                    <p>{completion}</p>
                  </div>
                )}
              </div>
            ) : (
              <p>Select a model to start chatting</p>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
