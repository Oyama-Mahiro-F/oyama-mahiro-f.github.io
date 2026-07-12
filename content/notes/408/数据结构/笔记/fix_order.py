import re

with open(r'D:\university_learning\考研\408\数据结构\笔记\第7章 查找.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract analysis block
a_start = content.find('##### 4. B')
a_end = content.find('#### 三、B+')
analysis = content[a_start:a_end]
print(f'Analysis block: {len(analysis)} chars, starts at {a_start}')

# Remove from current position
content = content[:a_start] + content[a_end:]

# Find end of B树查找 code block and insert analysis there
# The search ends with: 查找失败\n```\n\n##### 5.
marker = '查找失败\n```\n\n##### 5.'  # 查找失败\n```\n\n##### 5.
pos = content.find(marker)
if pos > 0:
    insert_pos = pos + 4 + 4  # after 查找失败\n```
    content = content[:insert_pos] + '\n' + analysis.strip() + '\n\n' + content[insert_pos:]
    print(f'Inserted at pos {insert_pos}')
else:
    print('Marker not found!')
    # Debug: show what's around where search code ends
    idx = content.find('查找失败')  # 查找失败
    if idx >= 0:
        print(f'--- around 查找失败: ---')
        print(repr(content[idx:idx+50]))

with open(r'D:\university_learning\考研\408\数据结构\笔记\第7章 查找.md', 'w', encoding='utf-8') as f:
    f.write(content)
print('Done.')
