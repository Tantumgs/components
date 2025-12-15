import { useState } from 'react';
import Title from './components/Title';
import Subtitle from './components/Subtitle';
import Paragraph from './components/Paragraph';
import HighlightBox from './components/HighlightBox';
import StudentCard from './components/StudentCard';
import Counter from './components/Counter';
import CourseInfo from './components/CourseInfo';
import LivePreview from './components/LivePreview';
import StudentList from './components/StudentList';
import StudentFilter from './components/StudentFilter';

function App() {
  const currentYear = new Date().getFullYear();

  // Состояние для фильтрации
  const [filterActive, setFilterActive] = useState(false);

  // Массив данных студентов
  const students = [
    { name: 'Айда Ибрагимова', group: 'ИВТ-201', favoriteSubject: 'React' },
    { name: 'Нурлан Кулмаганбетов', group: 'ИВТ-201', favoriteSubject: 'JavaScript' },
    { name: 'Дастан Сарсенов', group: 'ИВТ-201', favoriteSubject: 'Web Design' },
    { name: 'Амина Жанабаева', group: 'ИВТ-202', favoriteSubject: 'Vue.js' }
  ];

  // Массив студентов для мини-проекта (с информацией об активности)
  const studentsList = [
    { name: 'Айда Ибрагимова', track: 'Frontend (React)', isActive: true },
    { name: 'Нурлан Кулмаганбетов', track: 'Full Stack (JS/Node)', isActive: true },
    { name: 'Дастан Сарсенов', track: 'Frontend (React)', isActive: false },
    { name: 'Амина Жанабаева', track: 'Backend (Python)', isActive: true },
    { name: 'Марат Токсанов', track: 'Full Stack (JS/Node)', isActive: false },
    { name: 'Ляйсан Искакова', track: 'Frontend (React)', isActive: true },
    { name: 'Ильяс Абдулхаков', track: 'DevOps', isActive: true },
    { name: 'Мария Петрова', track: 'Backend (Python)', isActive: false }
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      {/* Секция "Об этом курсе" */}
      <Title text="Об этом курсе" />
      <Subtitle text="Введение в веб-разработку с React" />
      
      <Paragraph text="Этот курс предназначен для студентов, которые хотят научиться создавать современные веб-приложения. 
      Мы будем изучать основные концепции React, работать с компонентами, реквизитами и состоянием." />
      
      <HighlightBox 
        title="Ключевые навыки" 
        content="Вы научитесь создавать переиспользуемые компоненты React, управлять данными через props и state, 
        работать с JSX и развертывать приложения на Vercel." 
      />

      {/* Секция студентов */}
      <Subtitle text="Наши студенты" />
      <div style={{ marginTop: '20px' }}>
        {students.map((student, index) => (
          <StudentCard 
            key={index}
            name={student.name}
            group={student.group}
            favoriteSubject={student.favoriteSubject}
          />
        ))}
      </div>

      {/* Секция интерактивных компонентов */}
      <Subtitle text="Интерактивные компоненты" />
      
      <Counter />
      
      <CourseInfo />
      
      <LivePreview />

      {/* МИНИ-ПРОЕКТ: Список студентов с фильтрацией */}
      <Subtitle text="📚 Мини-проект: Список студентов E|C" />
      <StudentFilter filterActive={filterActive} setFilterActive={setFilterActive} />
      <StudentList students={studentsList} filterActive={filterActive} />

      {/* Футер */}
      <footer style={{ marginTop: '40px', textAlign: 'center', borderTop: '1px solid #ddd', paddingTop: '20px' }}>
        <p>&copy; {currentYear} Курс React. Все права защищены.</p>
      </footer>
    </div>
  );
}

export default App
