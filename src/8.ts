import { Request, Response } from 'express';

const handleGetRequest = async (req: Request, res: Response) => {
  try {
    const projects = await getProjects();
    res.json(projects);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const handlePostRequest = async (req: Request, res: Response) => {
  try {
    const project = await createProject(req.body);
    res.json(project);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const handlePutRequest = async (req: Request, res: Response) => {
  try {
    const project = await updateProject(req.body);
    res.json(project);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const handleDeleteRequest = async (req: Request, res: Response) => {
  try {
    const project = await deleteProject(req.params.id);
    res.json(project);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
