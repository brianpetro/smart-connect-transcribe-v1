import * as _components from './_components.js';
import * as append from 'smart-connect-notes-v1/actions/append.js';
import * as create from 'smart-connect-notes-v1/actions/create.js';

const gpt_id = 'g-OMRBkoAV0';
const gpt_url = 'https://chatgpt.com/g/g-OMRBkoAV0-smart-connect-transcribe-notes';
const group_dir = 'transcribe-v1';
const group_name = 'Transcribe';
const repo_url = 'https://github.com/brianpetro/smart-connect-transcribe-v1';
const settings = {
  env_path: {
    name: 'Inbox Path',
    type: "folder",
    description: "Destination folder for transcribed notes."
  },
};

export default {
  _components,
  // actions
  append,
  create,
  // group settings
  settings,
  gpt_id,
  gpt_url,
  group_dir,
  group_name,
  repo_url
};