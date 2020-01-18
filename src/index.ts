import { IFile } from "@fang/core/lib/interface";
import rename, { Transformer } from "rename";

export default (options: Transformer) => (
	files: Array<IFile>
): Array<IFile> => {
	return files.map(file => {
		file.path = rename(file.path, options).toString();

		return file;
	});
};
