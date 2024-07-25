import { Avatar, Chip } from '@nextui-org/react';

export default function Home() {
  return (
    <div>
      <Chip>Chip</Chip>
      <div className="flex gap-3 items-center">
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <Avatar name="Junior" />
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
        <Avatar name="Jane" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
        <Avatar name="Joe" />
      </div>
      <h2>Вопросы</h2>
      <p>категории</p>
      <p>seo text</p>
      <h2>Видео</h2>
      <p>категории</p>
      <p>seo text</p>
      <h2>Задачи с собеседований</h2>
      <p>сео описание задачек</p>
      <h2>Аналитика вакансий</h2>
      <p>сео что требуют</p>
      <h2>Менторы</h2>
      <p> сео топ менторов помогают готовиться к собесам</p>
      <h2>Курсы</h2>
      <p>сео топ курсов и отзывы</p>
    </div>
  );
}
