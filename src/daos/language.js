import { isValidObjectId } from 'mongoose';
import Language from '../models/language';

const createLanguage = async ({ name }) => {
  const language = await Language.create({ name });
  return language;
};

const findLanguage = async (condition) => {
  if (isValidObjectId(condition)) {
    const language = await Language.findById(condition);
    return language;
  }

  if (typeof condition === 'object' && condition !== null) {
    const language = await Language.findOne(condition);
    return language;
  }

  return null;
};

const updateLanguage = async (languageId, data) => {
  const language = await Language.findByIdAndUpdate(languageId, data, {
    new: true,
  });
  return language;
};

const deleteLanguage = async (languageId) => {
  await Language.findByIdAndDelete(languageId);
};

module.exports = {
  createLanguage,
  findLanguage,
  updateLanguage,
  deleteLanguage,
};
