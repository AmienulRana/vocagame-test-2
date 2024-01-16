import PropTypes from "prop-types";

/**
 * Input component for form fields.
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.label - The label for the input field.
 * @param {string} props.type - The type of the input field (e.g., "text", "password").
 * @param {React.ElementType} props.Icon - The icon component for the input field.
 * @returns {React.Component} The rendered component.
 */

export default function Input({ label, placeholder, Icon, onClickIcon, type = 'text'  }) {
  return (
    <div className="w-full mt-5">
      <p className="text-gray-400 font-bold">{label}</p>
      <div className="relative mt-3">
        <input
          type={type}
          className="2xl:px-8 2xl:py-5 px-4 py-2.5 border-gray-400 rounded-full outline-none border w-full"
          placeholder={placeholder}
        />
        {Icon && (
            <Icon onClick={onClickIcon} className="absolute cursor-pointer text-xl text-gray-400 top-[50%] right-4 2xl:right-8 -translate-y-[50%]" />
        )}
      </div>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["text", "password", "email", "number"]),
  Icon: PropTypes.any,
  placeholder: PropTypes.string,
  onClickIcon: PropTypes.func
};
