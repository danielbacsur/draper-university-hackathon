import { HuggingFaceStream, StreamingTextResponse } from 'ai';
import { HfInference } from '@huggingface/inference';

const Hf = new HfInference("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");

export async function POST(req: Request) {
  const { prompt, model, hello } = await req.json();

  const response = await Hf.textGenerationStream({
    model: model || 'OpenAssistant/oasst-sft-4-pythia-12b-epoch-3.5',
    inputs: `<|prompter|>${prompt}<|endoftext|><|assistant|>`,
    parameters: {
      max_new_tokens: 200,
      typical_p: 0.2,
      repetition_penalty: 1,
      truncate: 1000,
      return_full_text: false
    }
  });

  const stream = HuggingFaceStream(response);
  return new StreamingTextResponse(stream);
}
