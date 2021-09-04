<template>
  <form @submit.prevent='onSubmit' class="form">
    <fieldset class="form__container">
      <div class='form__itemContainer'>
        <label class='form__label' for="surname">Фамилия*</label>
        <input class='form__item' type="text" id="surname" v-model.trim='surname'
          :class='{form__inputError: ($v.surname.$dirty && !$v.surname.required)}'>
        <span class='form__error'
          v-if="$v.surname.$dirty && !$v.surname.required"
          :class='{form__errorActive: ($v.surname.$dirty && !$v.surname.required)}'
          >Поле Фамилия обязательное для заполнения!
        </span>
        <span class='form__error' 
          v-else-if="$v.surname.$dirty && !$v.surname.minLength"
          :class='{form__errorActive: ($v.surname.$dirty && !$v.surname.minLength)}'
          >Поле Фамилия должно иметь больше, чем {{$v.surname.$params.minLength.min}} символа
        </span>
      </div>
      <div class='form__itemContainer'>
        <label class='form__label' for="firstname">Имя*</label>
        <input  class='form__item' type="text" id="firstname" v-model.trim='firstname'
        :class='{form__inputError: ($v.firstname.$dirty && !$v.firstname.required)}'>
        <span class='form__error' v-if="$v.firstname.$dirty && !$v.firstname.required"
          :class='{form__errorActive: ($v.firstname.$dirty && !$v.firstname.required)}'
          >Поле Имя обязательное для заполнения!
        </span>
        <span class='form__error' 
          v-else-if="$v.firstname.$dirty && !$v.firstname.minLength"
          :class='{form__errorActive: ($v.firstname.$dirty && !$v.firstname.minLength)}'
          >Поле Имя должно иметь больше, чем {{$v.firstname.$params.minLength.min}} символа
        </span>
      </div>
      <div class='form__itemContainer'>
        <label class='form__label' for="lastname">Отчество</label>
        <input  class='form__item' type="text" id="lastname">
      </div>
      <div class='form__itemContainer'>
        <label class='form__label' for="date-of-birth">Дата Рождения*</label>
        <input  class='form__item' type="date" id="dateOfBirth" v-model.trim="dateOfBirth"
          :class='{form__inputError: ($v.dateOfBirth.$dirty && !$v.dateOfBirth.required)}'>
        <span class='form__error'
          v-if="$v.dateOfBirth.$dirty && !$v.dateOfBirth.required"
          :class='{form__errorActive: ($v.dateOfBirth.$dirty && !$v.dateOfBirth.required)}'
          >Поле Дата Рождения обязательно для заполнения!
        </span>
      </div>
      <div class='form__itemContainer'>
        <label class='form__label' for="phone">Номер телефона*</label>
        <input  class='form__item' type="tel" name="" id="phone" v-model.trim='phone'
          :class='{form__inputError: ($v.phone.$dirty && !$v.phone.required)}'>
        <span class='form__error' 
          v-if="$v.phone.$dirty && !$v.phone.required"
          :class='{form__errorActive: ($v.phone.$dirty && !$v.phone.required)}'
          >Поле Номер Телефона обязательно для заполнения!
        </span>
        <span class='form__error' 
          v-else-if="$v.phone.$dirty && !$v.phone.numeric"
          :class='{form__errorActive: ($v.phone.$dirty && !$v.phone.numeric)}'
          >Поле Номер Телефона должно состоять только из цифр!
        </span>
        <span class='form__error' 
          v-else-if="$v.phone.$dirty && !$v.phone.minLength"
          :class='{form__errorActive: ($v.phone.$dirty && !$v.phone.minLength)}'
          >Поле Номер Телефона должно иметь 11 цифр!
        </span>
        <span class='form__error' 
          v-else-if="$v.phone.$dirty && !$v.phone.maxLength"
          :class='{form__errorActive: ($v.phone.$dirty && !$v.phone.maxLength)}'
          >Поле Номер Телефона должно иметь 11 цифр!
        </span>
      </div>
      <!-- 
      
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
      </div> -->
    </fieldset>
    <!-- <fieldset class="form__container">
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
    </fieldset> -->
    
    <button class="form__submit">Отправить</button>
    <span>* Поле обязательное для заполнения.</span>
  </form>
</template>

<script>
import { required, minLength, numeric, maxLength } from 'vuelidate/lib/validators';

export default {
  data: () => ({
      surname: '',
      firstname: '',
      dateOfBirth: '',
      phone: '7',
  }),
  validations: {
    surname: { required, minLength: minLength(2) },
    firstname: { required, minLength: minLength(2) },
    dateOfBirth: { required },
    phone: { required, numeric, minLength: minLength(11), maxLength: maxLength(11) },
  },
  methods: {
    onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return;
      }
    }
  }
}
</script>