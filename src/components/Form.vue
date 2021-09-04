<template>
  <form action="" class="form">
    <fieldset class="form__container">
      <label class='form__label' for="surname">Фамилия*</label>
      <input class='form__item' type="text" name="" id="surname">
      <span class='form__error form__error_active'>Ошибка!</span>
      <label class='form__label' for="firstname">Имя*</label>
      <input  class='form__item' type="text" name="" id="firstname">
      <span class='form__error form__error_active'>Ошибка!</span>
      <label class='form__label' for="lastname">Отчество</label>
      <input  class='form__item' type="text" name="" id="lastname">
      <span class='form__error form__error_active'>Ошибка!</span>
      <label class='form__label' for="date-of-birth">Дата Рождения*</label>
      <input  class='form__item' type="date" name="" id="date-of-birth">
      <span class='form__error form__error_active'>Ошибка!</span>
      <label class='form__label' for="phone">Номер телефона* (11 цифр. Начинается с 7)</label>
      <input  class='form__item' type="tel" name="" id="phone">
      <span class='form__error form__error_active'>Ошибка!</span>
      <label class='form__label' for="gender">Пол</label>
      <input  class='form__item' type="text" name="" id="gender">
      <span class='form__error form__error_active'>Ошибка!</span>
      <label class='form__label' for="clients">Группа клиентов*</label>
      <select multiple name="" id="clients">
        <option value="vip">VIP</option>
        <option value="problem">Проблемные</option>
        <option value="oms">ОМС</option>
      </select>
      <span class='form__error form__error_active'>Ошибка!</span>
      <label class='form__label' for="doctor">Лечащий врач</label>
      <select class='form__item form__item-select' name="" id="doctor">
        <option value="ivanov">Иванов</option>
        <option value="zakharova">Захаров</option>
        <option value="chernysheva">Чернышева</option>
      </select>
      <div class="form__item form__checkbox-container">
        <label class='form__label' for="sms">Не отправлять СМС</label>
        <input class='form__item' type="checkbox" name="" id="sms">
      </div>
    </fieldset>
    <fieldset class="form__container">
      <h3 class='form__item-header'>Адрес:</h3>
      <label class='form__label' for="postnumber">Индекс</label>
      <input class='form__item' type="text" pattern="[0-9]{6}" name="" id="postnumber">
      <span class='form__error form__error_active'>Ошибка!</span>
      <label class='form__label' for="country">Страна</label>
      <input class='form__item' type="text" name="" id="country">
      <span class='form__error form__error_active'>Ошибка!</span>
      <label class='form__label' for="region">Область</label>
      <input class='form__item' type="text" name="" id="region">
      <span class='form__error form__error_active'>Ошибка!</span>
      <label class='form__label' for="city">Город*</label>
      <input class='form__item' type="text" name="" id="city">
      <span class='form__error form__error_active'>Ошибка!</span>
      <label class='form__label' for="street">Улица</label>
      <input class='form__item' type="text" name="" id="street">
      <span class='form__error form__error_active'>Ошибка!</span>
      <label class='form__label' for="house-number">Дом</label>
      <input class='form__item' type="text" name="" id="house-number">
      <span class='form__error form__error_active'>Ошибка!</span>
    </fieldset>
    <fieldset class="form__container">
      <h3 class='form__item-header'>Паспорт:</h3>
      <label class='form__label' for="document">Тип документа*</label>
      <select name="" id="document">
        <option value="passport">Паспорт</option>
        <option value="certificate-of-birth">Свидетельство о рождении</option>
        <option value="driver-license">Вод. удостоверение</option>
      </select>
      <span class='form__error form__error_active'>Ошибка!</span>
      <label class='form__label' for="docs-series">Серия</label>
      <input class='form__item' type="text" name="" id="docs-series">
      <span class='form__error form__error_active'>Ошибка!</span>
      <label class='form__label' for="docs-number">Номер</label>
      <input class='form__item' type="text" pattern="[0-9]{6}" name="" id="docs-number">
      <span class='form__error form__error_active'>Ошибка!</span>
      <label class='form__label' for="docs-organization">Кем выдан</label>
      <input class='form__item' type="text" name="" id="docs-organization">
      <span class='form__error form__error_active'>Ошибка!</span>
      <label class='form__label' for="date-of-issue">Дата выдачи*</label>
      <input class='form__item' type="date" name="" id="date-of-issue">
      <span class='form__error form__error_active'>Ошибка!</span>
    </fieldset>
    
    <span>* Поле обязательное для заполнения.</span>
  </form>
</template>