import os
from datetime import datetime


def extract_think(file_path: str) -> str:
    with open(file_path, 'r', encoding='utf-8') as file:
        markdown = file.read()
    start = markdown.find("## Think") + len("## Think")
    end = markdown.find("## Night Journal")
    return markdown[start:end].strip()


def save_to_new_markdown(extracted_text: str, directory: str = 'wiki/Journals') -> str:
    current_date = datetime.now().strftime('%Y-%m-%d')
    new_file_name = f'{current_date}.md'
    new_file_path = os.path.join(directory, new_file_name)

    metadata = f"""---\ndate: '{current_date}'\nslug: '/{current_date}'\ndescription: ''\n---\n\n"""

    with open(new_file_path, 'w', encoding='utf-8') as file:
        file.write(metadata)
        file.write(extracted_text)

    return new_file_path


target_date = datetime.now().strftime('%Y-%m-%d')

base_path = 'digital-garden/10. Personal/11. Daily'
original_file_path = os.path.join(base_path, f'{target_date}.md')

extracted_text = extract_think(original_file_path)
save_to_new_markdown(extracted_text)
print(extracted_text)
