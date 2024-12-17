const STORAGE_KEY = 'campaign_draft';

export const saveDraft = (data: any) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save campaign draft:', error);
  }
};

export const loadDraft = () => {
  try {
    const draft = localStorage.getItem(STORAGE_KEY);
    return draft ? JSON.parse(draft) : null;
  } catch (error) {
    console.error('Failed to load campaign draft:', error);
    return null;
  }
};

export const clearDraft = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear campaign draft:', error);
  }
};